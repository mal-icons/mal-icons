import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-bid-landscape-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBidLandscapeDisabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M62-889 894-57l-42 42-105-105H180q-24 0-42-18t-18-42v-567L20-847l42-42Zm302 415L180-290v110h506L555-311l-14 14-177-177ZM180-687v312l156-156-156-156Zm16-153h584q24 0 42 18t18 42v584l-60-60v-280L640-396l-42-43 182-182v-159H256l-60-60Zm402 401Zm-153 18ZM336-531Zm17 68Zm163-57Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBidLandscapeDisabled;
