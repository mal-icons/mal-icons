import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-screen-desktop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlScreenDesktop {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M960 95.81H64c-35.18 0-64 28.8-64 64V704c0 35.18 28.82 63.98 64 63.98h416v96.21H320c-17.66 0-32 14.34-32 32s14.34 32 32 32h384c17.66 0 32-14.34 32-32s-14.34-32-32-32H544v-96.21h416c35.18 0 64-28.8 64-63.98V159.81c0-35.2-28.82-64-64-64zM960 704H64V159.81h896V704z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlScreenDesktop;
