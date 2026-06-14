import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-c",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevC {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M566.6 176.4q0-15-6.5-26.7a51 51 0 0 0-19.3-18.8L327.8 8.1a52 52 0 0 0-56.70.5C242.8 25.3 101.3 106.5 59 131a49 49 0 0 0-25.7 45.5v247.2q0 14.8 6.2 26.2A51 51 0 0 0 59.2 469c42.1 24.4 183.6 105.6 211.9 122.3a52 52 0 0 0 56.70.5l213-122.8a51 51 0 0 0 19.6-19.4 53 53 0 0 0 6.3-26.1z"}],["path",{"fill":"currentColor","d":"M327.3 8.6a52 52 0 0 0-56.60.6c-28.2 16.6-169.5 97.5-211.6 122a49 49 0 0 0-25.7 45.3V423a53 53 0 0 0 6.2 26A51 51 0 0 0 59 468.5l42 24.2L491 103z"}],["path",{"fill":"currentColor","d":"m355.1 262.4 83 0.6c0-34.6-35-119.2-135.3-119.2-64 0-150 40.6-150 157.5 0 116.8 84.3 155 150 155 106.2 0 131.6-73.6 131.6-115.2l-79.1-4.5s2 48-53 48c-50.8 0-59.3-62.2-59.3-83.3 0-32.2 11.5-83.9 59.3-83.9 47.9 0 52.8 45 52.8 45"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevC;
