import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-settings-input-composite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSettingsInputComposite {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 2c0-0.55-0.45-1-1-1s-1 0.45-1 1v4H1v6h6V6H5V2zm4 16.82h2V23h2v-4.18h2V14H9v4.82zm-8 0h2V23h2v-4.18h2V14H1v4.82zM21 6V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v4h-2v6h6V6h-2zm-8-4c0-0.55-0.45-1-1-1s-1 0.45-1 1v4H9v6h6V6h-2V2zm4 16.82h2V23h2v-4.18h2V14h-6v4.82z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSettingsInputComposite;
