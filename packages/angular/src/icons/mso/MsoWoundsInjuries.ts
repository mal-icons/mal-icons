import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wounds-injuries",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWoundsInjuries {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m128-86-42-42 93-93-95-26 16-58 94 26-25-95 58-16 25 95 170-169-95-26 16-58 95 26-26-95 58-16 26 95 169-170-95-25 16-58 95 25-26-94 58-16 26 95 93-93 42 42-93 93 95 26-16 58-94-26 25 95-58 16-25-95-170 169 95 26-16 58-95-26 26 95-58 16-26-95-169 170 95 25-16 58-95-25 26 94-58 16-26-95-93 93Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWoundsInjuries;
