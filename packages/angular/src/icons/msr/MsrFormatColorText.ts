import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-format-color-text",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFormatColorText {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160 0q-29 0-49.5-20.5T90-70q0-29 20.5-49.5T160-140h640q29 0 49.5 20.5T870-70q0 29-20.5 49.5T800 0H160Zm111-280q-21 0-30.5-13.5T239-327l187-476q6-15 21.5-26t32.5-11q17 0 32.5 11t21.5 26l187 476q8 20-1 33.5T689-280q-10 0-19-6.5T657-302l-49-128H352l-49 128q-4 9-12.5 15.5T271-280Zm105-214h208L482-765h-4L376-494Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFormatColorText;
