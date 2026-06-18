import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-protractor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiProtractor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12c6.63 0 12-5.37 12-12S18.63 0 12 0zm-0.27 3.79v1.71h0.55v-1.71a9.06 9.06 0 15.96 2.47l-1.28 1.280.390.39 1.28-1.28a9.06 9.06 0 12.47 5.96h-1.71v0.55h1.72v2H2.91v-2H4.62v-0.55h-1.71a9.06 9.06 0 12.47-5.96L6.66 7.92l0.39-0.39-1.28-1.28a9.06 9.06 0 15.96-2.47zM12 6.97a5.91 5.91 0 0-5.91 5.91h11.82A5.91 5.91 0 12 6.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiProtractor;
