import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-no-luggage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNoLuggage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m760-286-60-60v-314H386l-60-60h34v-160h240v160h160v434ZM630-416l-40-40v-144h40v184ZM500-546l-40-40v-14h40v54ZM400-720h160v-120H400v120ZM340-80h-80v-40h-60v-595h45l55 55h-40v480h440v-62l60 62v60h-60v40h-80v-40H340v40Zm-10-160v-350h40v350h-40Zm130-260 40 40v220h-40v-260Zm130 130 40 40v90h-40v-130Zm-47-133Zm-66 106ZM833-41 26-848l43-43L876-84l-43 43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNoLuggage;
