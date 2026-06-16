import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-campaign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCampaign {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 11v2h4v-2h-4zm-2 6.61c0.960.71 2.21 1.65 3.2 2.390.4-0.530.8-1.07 1.2-1.6-0.99-0.74-2.24-1.68-3.2-2.4-0.40.54-0.8 1.08-1.2 1.61zM20.4 5.6c-0.4-0.53-0.8-1.07-1.2-1.6-0.990.74-2.24 1.68-3.2 2.40.40.530.8 1.07 1.2 1.60.96-0.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 0.9-2 2v2c0 1.10.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm5.03 1.71L11 9.53v4.94l-1.97-1.18-0.48-0.29H4v-2h4.55l0.48-0.29zM15.5 12c0-1.33-0.58-2.53-1.5-3.35v6.69c0.92-0.81 1.5-2.01 1.5-3.34z"}],["path",{"d":"M9.03 10.71 11 9.53v4.94l-1.97-1.18-0.48-0.29H4v-2h4.55l0.48-0.29z","opacity":".3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCampaign;
