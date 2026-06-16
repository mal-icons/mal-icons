import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-format-italic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFormatItalic {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M264-199q-16.8 0-28.4-11.64-11.6-11.64-11.6-28.5t11.6-28.36Q247.2-279 264-279h94l139-409H378q-16.8 0-28.4-11.64-11.6-11.64-11.6-28.5t11.6-28.36Q361.2-768 378-768h300q16.8 0 28.4 11.64 11.6 11.64 11.6 28.5T706.4-699.5Q694.8-688 678-688h-94L445-279h119q16.8 0 28.4 11.64 11.6 11.64 11.6 28.5T592.4-210.5Q580.8-199 564-199H264Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFormatItalic;
