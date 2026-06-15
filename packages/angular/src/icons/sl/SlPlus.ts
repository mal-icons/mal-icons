import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlPlus {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M512 0C229.23 0 0 229.23 0 512c0 282.78 229.23 512 512 512 282.78 0 512-229.22 512-512C1024 229.23 794.78 0 512 0zm0 961.01c-247.02 0-448-201.98-448-449.01 0-247.02 200.98-448 448-448s448 200.98 448 448-200.98 449.01-448 449.01zM736 480H544V288c0-17.66-14.34-32-32-32s-32 14.34-32 32v192H288c-17.66 0-32 14.34-32 32s14.34 32 32 32h192v192c0 17.66 14.34 32 32 32s32-14.34 32-32V544h192c17.66 0 32-14.34 32-32s-14.34-32-32-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlPlus;
