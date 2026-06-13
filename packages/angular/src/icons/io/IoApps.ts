import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-apps",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoApps {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z"}],["path",{"d":"M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z"}],["path",{"d":"M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z"}],["path",{"d":"M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z"}],["path",{"d":"M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z"}],["path",{"d":"M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z"}],["path",{"d":"M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z"}],["path",{"d":"M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z"}],["path",{"d":"M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoApps;
