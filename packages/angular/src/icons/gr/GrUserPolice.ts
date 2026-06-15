import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-user-police",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrUserPolice {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M16,14 C18.37,15.18 20,17.65 20,21 L20,23 L4,23 L4,21 C4,17.65 5.63,15.18 8,14 M12,15 C15.26,15 17.9,12.31 17.9,9 C17.9,8.3 18.12,7.63 17.9,7 M6.09,7 C5.88,7.62 6.09,8.31 6.09,9 C6.09,12.31 8.74,15 12,15 L12,15 M6,8 L18,8 L21,4 C19.09,2.27 15.79,1 12,1 C8.16,1 4.83,2.3 3,4 L6,8 L6,8 L6,8 Z M12,5 C12.55,5 13,4.55 13,4 C13,4 11,4 11,4 C11,4.55 11.45,5 12,5 L12,5 L12,5 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrUserPolice;
