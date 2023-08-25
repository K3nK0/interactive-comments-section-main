import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"

const initialState = {
    comment: [
        {
        id: nanoid(8),
        content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "1 month ago",
        score: 12,
        userImg: "./avatars/image-amyrobson.png",
        username: "amyrobson",
        editMode: false
        },
        {
        id: 2,
        content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2 weeks ago",
        score: 5,
        userImg: "./avatars/image-maxblagun.webp",
        username: "maxblagun",
        editMode: false
        }
    ],
    replies: [
        {
        replying: 2,
        id: 3,
        content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt: "1 week ago",
        score: 4,
        replyingTo: "maxblagun",
        userImg: "./avatars/image-ramsesmiron.webp",
        username: "ramsesmiron",
        editMode: false
        },
        {
        replying: 2,
        id: 4,
        content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: "2 days ago",
        score: 2,
        replyingTo: "ramsesmiron",
        userImg: "./avatars/image-juliusomo.png",
        username: "juliusomo",
        editMode: false
        }
    ]
}

export const comment = createSlice({
    name: "comment",
    initialState,
    reducers: {
        increment: (state, action) => {
            const scoreCalc = state.comment.find(obj => obj.id === action.payload)
            scoreCalc.score++
        },
        decrement: (state, action) => {
            const scoreCalc = state.comment.find(obj => obj.id === action.payload)
            if(scoreCalc.score > 0){
                scoreCalc.score--
            }
        },
        incrementReplie: (state, action) => {
            const scoreCalc = state.replies.find(reply => reply.id === action.payload)
            scoreCalc.score++
        },
        decrementReplie: (state, action) => {
            const scoreCalc = state.replies.find(reply => reply.id === action.payload)
            if(scoreCalc.score > 0){
                scoreCalc.score--
            }
        },
        deleteReplie: (state, action) => {
            const replie = state.replies.find(reply => reply.id === action.payload)
            state.replies = state.replies.filter(replie => replie.id !== action.payload)
        },
        deleteComment: (state, action) => {
            const comment = state.comment.find(comment => comment.id === action.payload)
            state.comment = state.comment.filter(comment => comment.id !== action.payload)
        },
        addNewComment: (state, action) => {
            state.comment.push(action.payload)
        },
        editReplie: (state, action) => {
            const editReplie = state.replies.find(reply => reply.id === action.payload)
            editReplie.editMode = true
        },
        editComment: (state, action) => {
            const editComment = state.comment.find(comment => comment.id === action.payload)
            editComment.editMode = true
        },
        validComment: (state, action) => {
            const editComment = state.comment.find(comment => comment.id === action.payload.comID)
            editComment.content = action.payload.content
            editComment.editMode = false
        },
        validReplie: (state, action) => {
            const editReplie = state.replies.find(replie => replie.id === action.payload.comID)
            editReplie.content = action.payload.content
            editReplie.editMode = false
        }
    }
})

export const {increment, decrement, incrementReplie, decrementReplie, deleteReplie, deleteComment, addNewComment, editReplie, editComment, validComment, validReplie} = comment.actions
export default comment.reducer