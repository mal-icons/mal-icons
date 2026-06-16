import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-remove-road",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRemoveRoad {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M740-439v-361h60v361h-60ZM160-160v-640h60v640h-60Zm290-493v-147h60v147h-60Zm0 246v-147h60v147h-60Zm0 247v-148h60v148h-60Zm194 34 84-84-85-85 43-43 84.5 85 84.5-85 43 43-84 84.5 84 84.5-43 43-84-85-85 85-42-43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRemoveRoad;
