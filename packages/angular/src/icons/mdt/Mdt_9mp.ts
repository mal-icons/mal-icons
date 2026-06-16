import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-9mp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdt_9mp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 14h1.5v1.5H15zm-3.5-7.5H13V8h-1.5z","opacity":".3"}],["path",{"d":"M5 19h14V5H5v14zm13-5.5V16c0 0.55-0.45 1-1 1h-2v1.5h-1.5v-6H17c0.55 0 1 0.45 1 1zM10 10h3V9h-2c-0.55 0-1-0.45-1-1V6.5c0-0.550.45-1 1-1h2.5c0.55 0 1 0.45 1 1v4c0 0.55-0.45 1-1 1H10V10zm-4 3.5c0-0.550.45-1 1-1h4.5c0.55 0 1 0.45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6v-5z","opacity":".3"}],["path",{"d":"M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v5h1.5V14zm6 4.5H15V17h2c0.55 0 1-0.45 1-1v-2.5c0-0.55-0.45-1-1-1h-3.5v6zM15 14h1.5v1.5H15V14z"}],["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 16H5V5h14v14z"}],["path",{"d":"M14.5 10.5v-4c0-0.55-0.45-1-1-1H11c-0.55 0-1 0.45-1 1V8c0 0.550.45 1 1 1h2v1h-3v1.5h3.5c0.55 0 1-0.45 1-1zM13 8h-1.5V6.5H13V8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdt_9mp;
