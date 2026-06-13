import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-trash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiTrash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Trash"}],["path",{"d":"M19.45,4.06H15.27v-0.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v0.5H4.55a0.50.5,0,0,0,0,1h0.72l0.42,14.45a2.49,2.49,0,0,0,2.5,2.43h7.62a2.49,2.49,0,0,0,2.5-2.43l0.42-14.45h0.72A0.50.5,0,0,0,19.45,4.06Zm-9.72-0.5a0.50.5,0,0,1,0.5-0.5h3.54a0.50.5,0,0,1,0.50.5v0.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"}],["path",{"d":"M8.38,8h0a0.50.5,0,0,1,1,0l0.25,10a0.50.5,0,0,1-1,0Z"}],["path",{"d":"M15.63,8.01a0.50.5,0,0,0-1,0h0l-0.25,10a0.50.5,0,0,0,1,0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiTrash;
