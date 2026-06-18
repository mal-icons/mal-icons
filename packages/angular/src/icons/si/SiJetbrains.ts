import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-jetbrains",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJetbrains {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.35 24A2.35 2.35 0 0 1 0 21.65V10.99C0 9.660.54 8.37 1.47 7.43l5.97-5.96A5.01 5.01 0 0 1 10.99 0h10.67A2.35 2.35 0 0 1 24 2.35v10.66a5.06 5.06 0 0 1-1.47 3.55l-5.96 5.97A5.02 5.02 0 0 1 13.01 24v0H2.35Zm8.97-6.85H5.49v1.37h5.83v-1.37ZM3.96 6.51h13.52v13.52l4.26-4.26a3.94 3.94 0 0 0 1.15-2.77V2.35c0-0.68-0.55-1.23-1.23-1.23H10.99a3.9 3.9 0 0 0-2.77 1.15L3.96 6.51Zm-0.190.19L2.26 8.22a3.94 3.94 0 0 0-1.14 2.77v10.66c0 0.680.55 1.23 1.23 1.23h10.67a3.9 3.9 0 0 0 2.77-1.15l1.51-1.51H3.77V6.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJetbrains;
