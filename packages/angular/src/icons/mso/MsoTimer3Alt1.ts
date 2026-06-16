import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-timer-3-alt-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTimer3Alt1 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M363-280h184q26 0 43-17t17-43v-56q0-23-8-38.5T574-450q17 0 25-16t8-39v-39q0-26-17-43t-43-17H363v60h184v64h-99v60h99v80H363v60Zm-3-580v-60h240v60H360ZM480-81q-74 0-139.5-28.5T226-187q-49-49-77.5-114.5T120-441q0-74 28.5-139.5T226-695q49-49 114.5-77.5T480-801q67 0 126 22.5T711-716l51-51 42 42-51 51q36 40 61.5 97T840-441q0 74-28.5 139.5T734-187q-49 49-114.5 77.5T480-81Zm0-60q125 0 212.5-87.5T780-441q0-125-87.5-212.5T480-741q-125 0-212.5 87.5T180-441q0 125 87.5 212.5T480-141Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTimer3Alt1;
