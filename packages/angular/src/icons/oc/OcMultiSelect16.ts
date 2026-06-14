import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-multi-select-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMultiSelect16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.75 7.5h7.5a0.750.75 0 0 1 0 1.5h-7.5a0.750.75 0 0 1 0-1.5Zm0 5h7.5a0.750.75 0 0 1 0 1.5h-7.5a0.750.75 0 0 1 0-1.5Zm-4-10h6.5a0.750.75 0 0 1 0 1.5h-6.5a0.750.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10.31-3.08L11.07 2.42A0.250.25 0 0 1 11.26 2h4.49a0.250.25 0 0 1 0.190.42l-2.24 2.5a0.250.25 0 0 1-0.37 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMultiSelect16;
