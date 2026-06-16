import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wb-twilight",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWbTwilight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m727-563-42-44 86-84 42 42-86 86ZM80-170v-60h800v60H80Zm370-510v-120h60v120h-60ZM233-564l-85-87 42-42 87 87-44 42Zm35 184h424q-19-71-77-115.5T480-540q-77 0-135 44.5T268-380Zm-68 60q0-117 81.5-198.5T480-600q117 0 198.5 81.5T760-320H200Zm280-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWbTwilight;
