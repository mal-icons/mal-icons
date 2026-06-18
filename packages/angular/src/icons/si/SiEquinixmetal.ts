import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-equinixmetal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiEquinixmetal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.4 7.79v7.01l-1.60.56V7.23L16 5.56v11.47l-1.60.56V5L12 4.16l-2.40.84v12.59l-1.6-0.56V5.56L3.2 7.23v8.12l-1.6-0.56V7.79L0 8.35v7.58l4.8 1.68v-9.24l1.6-0.56v10.36L11.2 19.84V6.13l0.8-0.280.80.28v13.71l4.8-1.68V7.81l1.60.56v9.24L24 15.93V8.35z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiEquinixmetal;
