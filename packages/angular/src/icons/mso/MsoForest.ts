import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-forest",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoForest {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M303-80v-149H0l189-274H94l266-377 120 170 120-170 266 377h-94l188 274H658v149H543v-149H418v149H303Zm377-209h165L656-563h89L600-769l-80 115 106 151h-94l148 214Zm-564 0h489L416-563h89L360-769 215-563h90L116-289Zm0 0h189-90 290-89 189-489Zm564 0H532h94-106 225-89 189-165Zm-137 60h115-115Zm178 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoForest;
