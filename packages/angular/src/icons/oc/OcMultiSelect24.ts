import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-multi-select-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMultiSelect24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.75 11.5h11.5a0.750.75 0 0 1 0 1.5H8.75a0.750.75 0 0 1 0-1.5Zm0 6h11.5a0.750.75 0 0 1 0 1.5H8.75a0.750.75 0 0 1 0-1.5Zm-5-12h10a0.750.75 0 0 1 0 1.5h-10a0.750.75 0 0 1 0-1.5ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.31 7.92l-2.24-2.5A0.250.25 0 0 1 17.25 5h4.49a0.250.25 0 0 1 0.190.42l-2.24 2.5a0.250.25 0 0 1-0.37 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMultiSelect24;
