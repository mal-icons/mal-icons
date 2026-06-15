import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-edit-fade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgEditFade {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 12C8 10.52 8.8 9.23 10 8.54V15.46C8.8 14.77 8 13.48 8 12Z","stroke":"currentColor","stroke-opacity":"0.3","stroke-width":"4"}],["path",{"d":"M14 15.46V8.54C15.2 9.23 16 10.52 16 12C16 13.48 15.2 14.77 14 15.46Z","stroke":"currentColor","stroke-opacity":"0.6","stroke-width":"4"}],["path",{"d":"M3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12Z","stroke":"currentColor","stroke-width":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgEditFade;
