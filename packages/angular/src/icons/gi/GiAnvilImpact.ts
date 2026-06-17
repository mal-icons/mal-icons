import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-anvil-impact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAnvilImpact {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M413.38 69.91L336.94 191.47l-8.25-32.69-30.22 88.97 62.66-29.370.22 29.44 127.03-50.94-70.81-1.97 47.78-68.69-73.47 39.25 21.5-95.56zM210.22 102.09l-32 14.41 16.87 55.66-177.81 80.03 12.56 27.88L207.66 200l30.41 49.47 49.31-22.19-21.34-70.34-55.81-54.84zM197.59 266.78v20.35h-88.91c15.99 38.81 51.23 65.43 88.91 74.28v32.97h58.56c-12.12 30.53-33.51 55.68-58.47 77.59H172.22v18.69H456.56V471.97h-27.41c-28.73-21.89-50.05-47.02-61.62-77.59h63.66v-29.19c19.75-6.99 39.5-19.51 59.25-36.69-19.81-17.52-39.23-27.25-59.25-31.94v-29.78H197.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAnvilImpact;
