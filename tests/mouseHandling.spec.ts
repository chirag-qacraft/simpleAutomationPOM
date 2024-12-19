import { test, expect } from '@playwright/test';

test('Mouse Handling ', async ({ page }) => {
  // Navigate to the page with drag-and-drop functionality
  await page.goto('https://jqueryui.com/droppable/'); // Correct URL for Droppable page

  // Locate the iframe containing the draggable and droppable elements
  const frm = page.frameLocator('//iframe[@class="demo-frame"]');

  // Locate the draggable and droppable elements inside the iframe
  const dragObj = frm.locator('#draggable');  // Ensure correct selector for draggable element
  const dropTarget = frm.locator('#droppable');  // Ensure correct selector for droppable target

  // Get the position of the draggable element
  const dragObjBoundingBox = await dragObj.boundingBox();

  // Perform the drag-and-drop action
  if (dragObjBoundingBox) {
    // Click and hold the draggable element
    await page.mouse.move(dragObjBoundingBox.x + dragObjBoundingBox.width / 2, dragObjBoundingBox.y + dragObjBoundingBox.height / 2);
    await page.mouse.down();

    // Move to the droppable target
    const dropTargetBoundingBox = await dropTarget.boundingBox();
    if (dropTargetBoundingBox) {
      await page.mouse.move(dropTargetBoundingBox.x + dropTargetBoundingBox.width / 2, dropTargetBoundingBox.y + dropTargetBoundingBox.height / 2);
      
      // Release to drop the element
      await page.mouse.up();
    }
  }

  // Optionally, verify the drop action by checking the text inside the droppable element
    await expect(dropTarget).toHaveText('Dropped!');

});
