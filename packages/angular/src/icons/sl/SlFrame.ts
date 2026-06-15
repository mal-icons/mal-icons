import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-frame",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlFrame {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M224 112H32c-17.66 0-32 14.34-32 32v192c0 17.66 14.34 32 32 32s32-14.34 32-32V176h160c17.66 0 32-14.34 32-32s-14.34-32-32-32zm768 544c-17.66 0-32 14.34-32 32v160H800c-17.66 0-32 14.34-32 32s14.34 32 32 32h192c17.66 0 32-14.34 32-32V688c0-17.66-14.34-32-32-32zM224 848H64V688c0-17.66-14.34-32-32-32S0 670.34 0 688v192c0 17.66 14.34 32 32 32h192c17.66 0 32-14.34 32-32s-14.34-32-32-32zm768-736H800c-17.66 0-32 14.34-32 32s14.34 32 32 32h160v160c0 17.66 14.34 32 32 32s32-14.34 32-32V144c0-17.66-14.34-32-32-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlFrame;
