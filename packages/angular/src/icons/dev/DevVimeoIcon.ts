import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-vimeo-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevVimeoIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M599.7 160.3q-4 87.7-122.4 240.4Q355.1 560 270.3 560q-52.5 0-88.8-97l-48.4-178q-27-97-57.8-97-6.8 0-47 28.3L0 179.9q44.4-39.1 87.6-78.3 59.2-51.2 88.9-54 70-6.7 86.2 96 17.4 110.8 24.2 137.8 20.2 91.8 44.5 91.8 18.9 0 56.6-59.6t40.4-90.8q5.2-51.5-40.4-51.5-21.6 0-44.4 9.9 44.1-145.2 169-141 92.5 2.6 87.1 120.1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevVimeoIcon;
