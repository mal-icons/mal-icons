import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-format-letter-spacing-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFormatLetterSpacing2 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M247-101q-9 9-21 9t-21-9L101-205q-9-9-9-21t9-21l104-103q9-8 21-8.5t21 8.5q9 9 9 21t-9 21l-52 52h569l-51-52q-9-9-8.5-21t9.5-21q9-9 21-9t21 9l103 103q9 9 9 21t-9 21L755-101q-9 9-21 9t-21-9q-9-9-9-21t9-21l53-53H195l52 53q8 9 8.5 21t-8.5 21Zm52-374 145-387q3-8 10-13t16-5h20q9 0 16 5t10 13l145 388q5 13-2.5 23.5T637-440q-8 0-15-4.5T612-457l-37-105H384l-37 105q-3 8-9 12.5t-14 4.5q-14 0-22-11t-3-24Zm102-131h160l-78-222h-4l-78 222Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFormatLetterSpacing2;
