export const finTestWrapper = (wrapper,tag) => {
    return wrapper.find(`[data-test='${tag}']`)
}
