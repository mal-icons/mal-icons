import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-detector",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDetector {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-120q-88 0-168.5-33T169-249l43-43q53.6 53.89 122.97 82.94Q404.33-180 480-180q76.25 0 145.62-28.54Q694.99-237.09 749-291l42 42q-63 62-143 95.5T480-120Zm0-160q-56.35 0-107.68-21Q321-322 282-363l42-41q31 32 71.32 48 40.32 16 84.5 16t84.68-16q40.5-16 71.5-48l42 42q-39 40-90.32 61Q536.35-280 480-280ZM180-780v60h600v-60H180Zm121 120 18 60h322l18-60H301Zm18 120q-19.5 0-35.25-11.62T262-582l-25-78h-57q-24.75 0-42.37-17.62T120-720v-120h720v120q0 25-17.62 42.5T780-660h-57l-30 81q-6.93 17.25-22.34 28.13Q655.26-540 636-540H319ZM180-780v60-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDetector;
