import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-user-female",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrUserFemale {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M20,24 L20,19 C20,15 15.94,14 15,14 C18.95,14 20,12 20,12 C20,12 16.94,10.03 17,6 C16.94,3 14.85,1 12,1 C9.01,1 6.92,3 7,6 C6.92,9.97 4,12 4,12 C4,12 4.91,14 9,14 C7.92,14 4,15 4,19 L4,24 M16,19 L16,24 M8,19 L8,24"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrUserFemale;
