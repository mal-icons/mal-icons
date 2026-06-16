import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-settings-input-component",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSettingsInputComponent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 2c0-0.55-0.45-1-1-1s-1 0.45-1 1v4H1v6h6V6H5V2zm4 14c0 1.30.84 2.4 2 2.82V23h2v-4.18c1.16-0.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.30.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v4h-2v6h6V6h-2zm-8-4c0-0.55-0.45-1-1-1s-1 0.45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.30.84 2.4 2 2.82V23h2v-4.18c1.16-0.41 2-1.51 2-2.82v-2h-6v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSettingsInputComponent;
