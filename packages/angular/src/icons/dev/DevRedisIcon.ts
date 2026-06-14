import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-redis-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevRedisIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M567.8 328.6c-41.5 52.3-86.3 112.1-176 112.1-80 0-110-70.6-112-128 17.5 37.1 51.8 67.1 105.4 65.8C488 375 558.7 282 558.7 197.5 558.7 96.2 483 23.2 352 23.2c-93.8 0-210 35.7-286.4 92.1-0.8 58.1 31.5 133.6 43.2 125.3C175 193 227.5 162.4 278.4 147 203 231.1 22.2 426.3 0 460.6c2.5 31.6 41.5 116.2 60.6 116.2 5.8 0 10.8-3.3 16.6-9.1a2512 2512 0 0 0 138.5-169.1c5.6 77.6 43.7 172.4 150.4 172.4 95.4 0 190-68.9 233.2-224.1 5-19.1-18.2-34-31.5-18.2M459 203.3c0 49-48.1 73-92.1 73-23.5 0-41.6-6.1-55.9-14.2 26.3-39.8 52.3-80.6 80.3-124.3 49.3 8.4 67.7 35.8 67.7 65.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevRedisIcon;
