import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-laptop-mac",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLaptopMac {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0-160v-60h111l-30-30v-590h798v590l-30 30h111v60H0Zm480-22q14.45 0 24.23-9.77Q514-201.55 514-216q0-14.45-9.77-24.22Q494.45-250 480-250q-14.45 0-24.22 9.78Q446-230.45 446-216q0 14.45 9.78 24.23Q465.55-182 480-182Zm-339-98h678v-500H141v500Zm0 0v-500 500Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLaptopMac;
