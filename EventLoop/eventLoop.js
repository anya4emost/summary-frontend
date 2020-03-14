Stack, очередь задач, очередь микрозадач, RequestAnimationFrame(для анимации) -> Reflow, Repaint


Пример, когда стэк не довыполнится, а прервется и вернется к нему при следующем круге


function clientRect() {
    htmlElement.classList.add('some-class');//пошел делать reflow или repaint

    const result = htmlElement.getBoundingClientRect();

    console.log(result);
}

clientRect();

больший приоритет у микрозадач
 в стэке прочтет все за один раз - весь файл и разросает на таски и микротаски и RAF



промисы могут повесить сайт


сэт таймаут не вешает сайт



перед перерисовкой выполнит все RAF, но ими нельзя повесить сайт
(если в RAF встретит RAF, то это уже на следующий цикл пойдет)