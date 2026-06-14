import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-singlestore-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevSinglestoreIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-singlestore-icon-3-a)"}],["path",{"fill":"currentColor","d":"M313.6 0c64.3 17.9 122.8 63 147.1 118 37.2 89.4 28.6 202.4-12.1 269.6-34.3 55-87.2 84.4-147.9 83.7A171.7 171.7 0 0 1 129.3 301a170.8 170.8 0 0 1 235.5-159.5s-18.5-11-66-18.3C162.4 105.4 1.5 208.8 38.6 447a299 299 0 0 0 262.1 153c165-0.7 300-135.9 299.3-301.8C600 139.5 470.7 4.2 313.6 0"}],["path",{"fill":"currentColor","d":"M425.7 126.6c-22.8-48-70-85.8-127.8-100.9-12.9-3.5-26.5-5-41.5-5.7a259 259 0 0 0-65.7 8.6 260 260 0 0 0-116.4 73.7 298 298 0 0 0-60 103.6c0 0.8-0.7 1.5-0.7 3-0.7 2.8-3.6 11.3-3.6 13.5-0.7 1.4-0.7 3.6-1.4 5L6.5 236c0 0.7 0 1.4-0.8 2.1-18.5 92.3 12.3 175 30.9 205.8 4.6 7.7 8.4 14.1 12.3 20-42.2-228.8 79-338 216.8-341C338 121.7 410 151 445 209.6c-2.1-32.2-4.3-50-19.3-83"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevSinglestoreIcon;
