import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-fridge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFridge {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M342.5 47.1c9.9 0 19.4 4 26.4 11s10.9 16.5 10.9 26.4v104.7H132.2V84.5c0-9.9 3.9-19.4 10.9-26.4s16.5-11 26.4-11zM168.8 98.7h-11l-2 72.9h15zm211 107.2V460c0 12-9.7 22-21.7 22H153.9c-12 0-21.7-10-21.7-22V205.9zm-209 17.7h-15l2 143h11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFridge;
