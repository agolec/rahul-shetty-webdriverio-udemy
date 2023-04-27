describe('Dynamic loading page', () => {
    it('wait for the hidden element to show', async () => {
        const btnStart = $("#start button")
        const textFinish = $("#finish h4")

        browser.url('/dynamic_loading/1')

        btnStart.click()

        expect(textFinish.getText()).toEqual("Hello World!")

    })
})