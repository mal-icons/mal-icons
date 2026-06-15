import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-globe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrGlobe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M2,8 C2,8 5.5,9 7,10 C8.5,11 7.56,12.42 8,13 C8.44,13.58 10,12 10,15 C10,18 13,16 13,19 C13,22 15.5,21.5 16,20 C16.5,18.5 18.23,16.87 18,15 C17.77,13.13 17,12 15,12 C13,12 11.5,11.5 11,10 C10.5,8.5 14,8 13,5 C12,2 13,1 13,1 M23,12 C23,18.08 18.08,23 12,23 C5.93,23 1,18.08 1,12 C1,5.93 5.93,1 12,1 C18.08,1 23,5.93 23,12 L23,12 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrGlobe;
