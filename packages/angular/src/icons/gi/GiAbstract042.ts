import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-042",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract042 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m21,21v120.73 103.84h111.18 68.3v20.86h-68.3-111.18v103.84 120.73h111.18v-120.73h68.3 111.04 68.3v120.73h111.18v-120.73-103.84h-111.18-68.3v-20.86h68.3 111.18v-103.84-120.73h-111.18v120.73h-68.3-111.04-68.3v-120.73h-111.18zm139.24,0v90.03h191.38v-90.03h-191.38zm0,379.97v90.03h191.38v-90.03h-191.38z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract042;
