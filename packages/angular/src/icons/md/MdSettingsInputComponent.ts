import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-settings-input-component",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSettingsInputComponent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 2c0-0.55-0.45-1-1-1s-1 0.45-1 1v4H1v10c0 1.30.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5V2zM4 17c-0.55 0-1-0.45-1-1v-2h2v2c0 0.55-0.45 1-1 1zm-1-5V8h2v4H3zM13 2c0-0.55-0.45-1-1-1s-1 0.45-1 1v4H9v10c0 1.30.84 2.4 2 2.82V23h2v-4.18c1.16-0.42 2-1.52 2-2.82V6h-2V2zm-1 15c-0.55 0-1-0.45-1-1v-2h2v2c0 0.55-0.45 1-1 1zm-1-5V8h2v4h-2zm10-6V2c0-0.55-0.45-1-1-1s-1 0.45-1 1v4h-2v10c0 1.30.84 2.4 2 2.82V23h2v-4.18c1.16-0.42 2-1.52 2-2.82V6h-2zm-1 11c-0.55 0-1-0.45-1-1v-2h2v2c0 0.55-0.45 1-1 1zm-1-5V8h2v4h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSettingsInputComponent;
