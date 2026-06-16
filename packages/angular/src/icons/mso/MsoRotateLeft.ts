import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-rotate-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRotateLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M435-80q-48-7-93-25t-85-48l43-44q32 24 66 37.5t69 19.5v60Zm90 0v-60q110-21 182.5-103.5T780-443q0-127-86.5-213.5T480-743h-20l79 79-44 44-153-153 153-153 44 44-79 79h20q75 0 140.5 28T735-698q49 49 77 114.5T840-443q0 140-89 241T525-80ZM194-216q-28-38-46.5-84.5T122-398h61q5 38 18.5 73t36.5 65l-44 44Zm-72-272q7-50 25-95.5t47-85.5l44 43q-23 33-36.5 68T183-488h-61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRotateLeft;
