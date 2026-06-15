import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-spa",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrSpa {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,22 C13.5,22 16,21 16,16.5 C16,12 12,6 12,6 C12,6 8,12 8,16.5 C8,21 10.5,22 12,22 Z M12,22 C10.5,22 9.05,21.78 7,20.5 C3,18 2.5,10 2.5,10 C2.5,10 7,10.5 9,12 M12,22 C13.5,22 14.95,21.78 17,20.5 C21,18 21.5,10 21.5,10 C21.5,10 17,10.5 15,12"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrSpa;
