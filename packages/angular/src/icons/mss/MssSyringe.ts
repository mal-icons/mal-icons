import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-syringe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSyringe {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m171-699-42-41 136-138 41 44-46 47 57 57 148-147 41 41-54 56 382 380-93 93 172 172h-84L699-265l-93 93-380-382-55 55-42-43 146-146-57-58-47 47Zm96 103 339 339 142-142-85-85-90 92-42-43 91-91-85-85-91 91-42-41 90-92-85-85-142 142Zm-7-7 142-142-142 142Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSyringe;
