import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-barcode-reader",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBarcodeReader {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h352q34.12 0 51.56 28.5Q701-783 686-753L586-553q-8.37 15-22.44 24-14.07 9-31.56 9h-93.33L426-470h14q12.75 0 21.38 8.63T470-440v80q0 12.75-8.62 21.38T440-330h-52l-32 122q-11 39-43 63.5T240-120Zm0-60q20 0 36-12t21-32l81-296H253l-71 265q-8 29 10 52t48 23Zm40-400h252l100-200H280q-42 0-71 29t-29 71q0 42 29 71t71 29Zm485-193-17-36 127-58 16 37-126 57Zm110 280-127-57 17-37 126 58-16 36ZM770-660v-40h140v40H770Zm-364-20Zm-90 160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBarcodeReader;
