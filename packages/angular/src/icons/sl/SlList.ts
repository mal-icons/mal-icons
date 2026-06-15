import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlList {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M96 448H32c-17.66 0-32 14.34-32 32v64c0 17.66 14.34 32 32 32h64c17.66 0 32-14.34 32-32v-64c0-17.66-14.34-32-32-32zm896 32H320c-17.66 0-32 14.34-32 32s14.34 32 32 32h672c17.66 0 32-14.34 32-32s-14.34-32-32-32zM96 704H32c-17.66 0-32 14.34-32 32v64c0 17.66 14.34 32 32 32h64c17.66 0 32-14.34 32-32v-64c0-17.66-14.34-32-32-32zm896 32H320c-17.66 0-32 14.34-32 32s14.34 32 32 32h672c17.66 0 32-14.34 32-32s-14.34-32-32-32zM96 192H32c-17.66 0-32 14.34-32 32v64c0 17.66 14.34 32 32 32h64c17.66 0 32-14.34 32-32v-64c0-17.66-14.34-32-32-32zm224 96h672c17.66 0 32-14.34 32-32s-14.34-32-32-32H320c-17.66 0-32 14.34-32 32s14.34 32 32 32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlList;
