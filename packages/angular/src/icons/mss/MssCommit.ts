import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-commit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCommit {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-280q-73 0-127.5-45.5T284-440H80v-80h204q14-69 68.5-114.5T480-680q73 0 127.5 45.5T676-520h204v80H676q-14 69-68.5 114.5T480-280Zm-0.23-60Q538-340 579-380.76q41-40.76 41-99Q620-538 579.24-579q-40.76-41-99-41Q422-620 381-579.23q-41 40.76-41 99Q340-422 380.77-381q40.76 41 99 41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCommit;
