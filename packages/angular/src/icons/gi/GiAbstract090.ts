import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-090",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract090 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m21,21v56.4c29.38,0 53.17,23.79 53.17,53.17s-23.79,53.17-53.17,53.17v19.09c29.38,0 53.17,23.79 53.17,53.17s-23.79,53.17-53.17,53.17v19.09c29.38,0 53.17,23.79 53.17,53.17s-23.79,53.17-53.17,53.17v56.4h56.4c0-29.38 23.79-53.17 53.17-53.17s53.17,23.79 53.17,53.17h19.09c0-29.38 23.79-53.17 53.17-53.17s53.17,23.79 53.17,53.17h19.09c0-29.38 23.79-53.17 53.17-53.17s53.17,23.79 53.17,53.17h56.4v-56.4c-29.38,0-53.17-23.79-53.17-53.17s23.79-53.17 53.17-53.17v-19.09c-29.38,0-53.17-23.79-53.17-53.17s23.79-53.17 53.17-53.17v-19.09c-29.38,0-53.17-23.79-53.17-53.17s23.79-53.17 53.17-53.17v-56.4h-56.4c0,29.38-23.79,53.17-53.17,53.17s-53.17-23.79-53.17-53.17h-19.09c0,29.38-23.79,53.17-53.17,53.17s-53.17-23.79-53.17-53.17h-19.09c0,29.38-23.79,53.17-53.17,53.17s-53.17-23.79-53.17-53.17h-56.4zm235,112.07c67.91,0 122.93,55.02 122.93,122.93s-55.02,122.93-122.93,122.93-122.93-55.02-122.93-122.93 55.02-122.93 122.93-122.93zm0,38.19c-46.8,0-84.75,37.94-84.75,84.75s37.94,84.75 84.75,84.75 84.75-37.94 84.75-84.75-37.94-84.75-84.75-84.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract090;
