import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-schedule-send",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfScheduleSend {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 12.5H15v4l3 2 0.75-1.23-2.25-1.52V12.5zM16 9 2 3v7l9 2-9 2v7l7.27-3.11C10.09 20.83 12.79 23 16 23c3.86 0 7-3.14 7-7s-3.14-7-7-7zm0 12c-2.75 0-4.98-2.22-5-4.97v-0.07a5.01 5.01 0 0 1 5-4.97c2.76 0 5 2.24 5 5S18.76 21 16 21z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfScheduleSend;
