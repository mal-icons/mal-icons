import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-netbeans",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandNetbeans {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.88 6.27a2.23 2.23 0 0 1 1.13 1.95v7.28c0 0.81 -0.44 1.56 -1.16 1.95l-6.75 4.27a2.27 2.27 0 0 1 -2.18 0l-6.75 -4.27a2.23 2.23 0 0 1 -1.16 -1.95v-7.28c0 -0.81 0.44 -1.55 1.16 -1.95l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-0.03"}],["path",{"d":"M15.5 9.43a1 1 0 0 1 0.5 0.87v3.27a1 1 0 0 1 -0.51 0.87l-3 1.92a1 1 0 0 1 -0.97 0l-3 -1.92a1 1 0 0 1 -0.51 -0.87v-3.27a1 1 0 0 1 0.51 -0.87l3 -1.79c0.31 -0.17 0.69 -0.17 1 0l3 1.79h-0.01l0 0"}],["path",{"d":"M12 21v-9l-7.5 -4.5"}],["path",{"d":"M12 12l7.5 -4.5"}],["path",{"d":"M12 3v4.5"}],["path",{"d":"M19.5 16l-3.5 -2"}],["path",{"d":"M8 14l-3.5 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandNetbeans;
