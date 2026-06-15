import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-info",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlInfo {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M576 736l-320v-286c0-0.34-0.1-0.66-0.1-1.01s0.1-0.650.1-0.99c0-17.66-14.34-32-32-32h-64c-17.66 0-32 14.34-32 32s14.34 32 32 32h32v256h-32c-17.66 0-32 14.34-32 32s14.34 32 32 32h128c17.66 0 32-14.34 32-32s-14.34-32-32-32zm-64-384c35.34 0 64-28.66 64-64s-28.66-64-64-64-64 28.66-64 64 28.66 64 64 64zm0-352c-282.77 0-512 229.23-512 512 0 282.78 229.23 512 512 512 282.78 0 512-229.22 512-512 0-282.77-229.22-512-512-512zm0 961.01c-247.02 0-448-201.98-448-449.01 0-247.02 200.98-448 448-448s448 200.98 448 448-200.98 449.01-448 449.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlInfo;
